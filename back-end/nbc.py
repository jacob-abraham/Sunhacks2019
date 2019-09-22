from newssite import Site

class NBC(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.nbcnews.com/search/?q={}'
        self.query_breaking = 'https://www.nbcnews.com/'
        self.bias_score = -8.4

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('h2', class_ = 'info___2s-c2')
            # grab the links
            links = [tag.find('h3').find('a').get('href') for tag in all_headlines]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'gs-title')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        return links