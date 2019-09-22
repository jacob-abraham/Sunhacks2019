from newssite import Site

class InfoWars(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.infowars.com/?s={}'
        self.query_breaking = 'https://www.infowars.com/breaking-news/'
        self.bias_score = 10

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('article')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'result')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]    
        return links