import requests
from bs4 import BeautifulSoup
from selenium import webdriver


class Site:
    def __init__(self):
        self.query = None
        self.html_content = None
        self.number = 10
    
    def query_str(self, keyword):
        return self.query.format(keyword.strip().replace(' ', '%20'), self.number)
    
    def get_html(self, keyword, refresh=False):
        if(refresh or self.html_content is None):
            options = webdriver.ChromeOptions()
            options.add_argument('--ignore-certificate-errors')
            options.add_argument('--incognito')
            options.add_argument('--headless')
            driver = webdriver.Chrome(chrome_options=options)
            driver.get(self.query_str(keyword))

            self.html_content = driver.page_source
        return self.html_content
    
    def get_parser(self, keyword):
        return BeautifulSoup(self.get_html(keyword), 'lxml')
    
    def get_links(self, keyword):
        pass