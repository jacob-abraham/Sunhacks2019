from newssite import Site

class BipartisanReport(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.infowars.com/?s={}'
        self.query_breaking = 'https://www.infowars.com/breaking-news/'

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
            all_headlines = parser.find_all('h2')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]    
        return links