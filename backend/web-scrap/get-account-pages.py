from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Set up Selenium WebDriver
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run headless browser
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)

# Define URL
url = "https://www.youtube.com/@Animesaga376"

# Fetch the page
driver.get(url)
html = driver.page_source

# Parse the page content
soup = BeautifulSoup(html, "html.parser")

# Convert relative links to absolute
for tag in soup.find_all(['a', 'img', 'link', 'script']):
    if tag.has_attr('href'):
        tag['href'] = urljoin(url, tag['href'])
    if tag.has_attr('src'):
        tag['src'] = urljoin(url, tag['src'])

# Extract video links
video_links = []
for link in soup.find_all('a', href=True):
    href = link['href']
    if '/watch?' in href:  # Modify this if needed based on the structure
        full_url = urljoin(url, href)
        video_links.append(full_url)

# Append video links to the HTML (for demonstration purposes)
video_section = '<h2>Video Links</h2><ul>'
for video_url in video_links:
    video_section += f'<li><a href="{video_url}">{video_url}</a></li>'
video_section += '</ul>'

# Append the video links section to the body
body_tag = soup.find('body')
if body_tag:
    body_tag.insert(0, BeautifulSoup(video_section, 'html.parser'))

# Save the HTML
with open('copied_page_with_videos.html', 'w', encoding='utf-8') as file:
    file.write(soup.prettify())

# Close the WebDriver
driver.quit()

print("Page saved as 'copied_page_with_videos.html' with working video links.")