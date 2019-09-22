from newssite import Site

class Fox(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.foxnews.com/search-results/search?q={}'
        self.query_breaking = 'https://www.foxnews.com/us/'

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = [headline for headline in parser.find_all('h4')]
            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            # add self
            links = [str(self.query_breaking + link[1:]) for link in link_tags]
        else:
            # scrape for keyword
            all_headlines = [headline for headline in parser.find_all('div', class_ = 'search-directive ng-scope')]
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]    
        return links