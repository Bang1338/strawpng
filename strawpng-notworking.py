import requests
import base64
from bs4 import BeautifulSoup
import httpx
#import urllib.parse

def urlencode(string):
    """Alternate way to url encoding"""
    encoded_chars = []
    for char in string:
        if char.isalnum():
            encoded_chars.append(char)
        elif char == '=':
            encoded_chars.append('=')
        else:
            encoded_chars.append("%{0:0>2X}".format(ord(char)))
    return "".join(encoded_chars)

def extract_website_id_and_title(url):
    """Extracts data-website-id and the title from the page using httpx."""

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,vi;q=0.7",
        "Connection": "keep-alive",
        "DNT": "1"
    }

    with httpx.Client(headers=headers) as client:
        response = client.get(url, timeout=10)

        if response.status_code != 200:
            print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
            return None, None

        if not response.text:
            print("The page content is empty.")
            return None, None

        soup = BeautifulSoup(response.text, 'html.parser')

        script_tag = soup.find('script', {'src': 'https://notebook.straw.page'})
        website_id = script_tag.get('data-website-id') if script_tag else None

        title = soup.title.string if soup.title else ''
        encoded_title = urlencode(title)

        return website_id, encoded_title
    
def read_cookies(filename):
    """Read SPID and cf_clearance from the specified file."""
    with open(filename, 'r') as file:
        data = file.read().strip().split('|')
        return { 
            'SPID': data[0],
            'cf_clearance': data[1]
        }

def read_from_bin_file(filename):
    """Read from a binary file, convert to base64, and return the result."""
    with open(filename, 'rb') as file:
        bin_data = file.read()
        return base64.b64encode(bin_data).decode()

def read_from_txt_file(filename, base64_encode=False, url_encode=False):
    """Read from a text file and optionally encode it in url encode."""
    with open(filename, 'r') as file:
        text_data = file.read().strip()
        if base64_encode:
            text_data = base64.b64encode(text_data.encode()).decode()
        if url_encode:
            text_data = urlencode(text_data)
        return text_data

def stage1(base_url):
    """Stage 1: Get JWT"""
    website_id, encoded_title = extract_website_id_and_title(base_url)
    if not website_id:
        print("Failed to extract website ID.")
        return

    print(f"Extracted Website ID: {website_id}")
    print(f"Extracted and URL Encoded Title: {encoded_title}")

    api_url = "https://notebook.straw.page/api/send"

    headers = {
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "DNT": "1",
        "Origin": base_url,
        "Referer": f"{base_url}/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "sec-ch-ua": 'Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"'
    }

    payload = {
        "type": "event",
        "payload": {
            "website": website_id,
            "hostname": base_url.replace('https://', ''),
            "screen": "1366x768",
            "language": "en-US",
            "title": encoded_title,
            "url": "/",
            "referrer": "https://straw.page/"
        }
    }

    response = requests.post(api_url, headers=headers, json=payload)

    print("NOTEBOOK - Done (it should have JWT token)")
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
    return response.text

def stage2(base_url):
    """Stage 2: Post image"""
    url = f"{base_url}/gimmicks/canvas/2"
    cookies = read_cookies("cfanion.txt")
    print(f"[CFanion] SPID: {cookies['SPID']} | cf_clearance: {cookies['cf_clearance']}")
    hwdata = str(input("Enter path to the HW data: "))

    print("Select the option for 'comp':")
    print("1: Read from binary file")
    print("2: Read from text file (base64 encoded)")
    print("3: Read from text file (base64 encoded and url encoded)")
    option = input("Enter option (1/2/3): ")
    
    with open(hwdata, "r") as f:
        hwdata = f.read().strip()
    
    if option == '1':
        compbin = str(input("Enter path/filename to the bin file: "))
        comp = read_from_bin_file(compbin, base64_encode=True, url_encode=True)
    elif option == '2':
        comptxt = str(input("Enter path/filename to the txt file: "))
        comp = read_from_txt_file(comptxt, base64_encode=False, url_encode=True)
    elif option == '3':
        comptxt = str(input("Enter path/filename to the txt file: "))
        comp = read_from_txt_file(comptxt)
    else:
        print("Invalid option")
        return

    headers = {
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie": f"SPID={cookies['SPID']}; cf_clearance={cookies['cf_clearance']}",
        "DNT": "1",
        "Origin": base_url,
        "Referer": base_url + "/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": 'Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"'
    }

    payload = f"comp={comp}&{hwdata}"
    print(f"Payload: {payload}")

    response = requests.post(url, headers=headers, data=payload)
    
    print("IMAGE - Done (it should work...)")
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
    
def stage3(base_url, jwt):
    """Stage 3: Send to strawpage that we sent drawing"""
    website_id, encoded_title = extract_website_id_and_title(base_url)
    if not website_id:
        print("Failed to extract website ID.")
        return

    print(f"Extracted Website ID: {website_id}")
    print(f"Extracted and URL Encoded Title: {encoded_title}")

    api_url = "https://notebook.straw.page/api/send"

    headers = {
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "DNT": "1",
        "Origin": base_url,
        "Referer": f"{base_url}/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "sec-ch-ua": 'Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "x-umami-cache": f"{jwt}"
    }

    payload = {
        "type": "event",
        "payload": {
            "website": website_id,
            "hostname": base_url.replace('https://', ''),
            "screen": "1366x768",
            "language": "en-US",
            "title": encoded_title,
            "url": "/",
            "referrer": "https://straw.page/",
            "name": "sent drawing!"
        }
    }

    response = requests.post(api_url, headers=headers, json=payload)

    print("NOTEBOOK - Done (it should have JWT token)")
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")


def main():
    base_url = str(input("Enter the base URL: "))  # E.g., "https://b1338tmp84527862098372.straw.page"
    jwt = stage1(base_url)
    stage2(base_url)
    stage3(base_url, jwt)
    
if __name__ == "__main__":
    main()
