import requests
from bs4 import BeautifulSoup
from selenium import webdriver


class Site:

    #static vars
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    prefs = {"profile.managed_default_content_settings.images": 2}
    options.add_experimental_option("prefs", prefs)
    options.add_argument('--headless')
    driver = webdriver.Chrome(chrome_options=options)

    def __init__(self):
        self.query_keyword = None
        self.query_breaking = None
        self.html_content = None
        self.number = 10
    
    def query_str(self, keyword=None):
        # no keyword, use breaking news
        if keyword is None:
            return self.query_breaking
        else:
            return self.query_keyword.format(keyword.strip().replace(' ', '%20'), self.number)
    
    def get_html(self, keyword=None, refresh=False):
        if(refresh or self.html_content is None):
            driver.get(self.query_str(keyword))

            self.html_content = driver.page_source
        return self.html_content
    
    def get_parser(self, keyword=None):
        return BeautifulSoup(self.get_html(keyword), 'lxml')
    
    def get_links(self, keyword=None):
        pass