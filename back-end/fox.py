from newssite import Site

class Fox(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.foxnews.com/search-results/search?q={}'
        self.query_breaking = 'https://www.foxnews.com/us/'
        self.url = 'https://www.foxnews.com/'
        self.bias_score = 8.8

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('article')
            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            # remove videos
            link_tags = [link_tag for link_tag in link_tags if 'video.foxnews' not in link_tag]
            # remove duplicates
            link_tags = list(dict.fromkeys(link_tags))
            
            # add self
            links = [str(self.url + link[1:]) for link in link_tags]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'search-directive ng-scope')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]    
        return links