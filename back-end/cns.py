from newssite import Site

class CNS(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.cnsnews.com/search/site/climate%20change'
        self.query_breaking = 'https://www.cnsnews.com/'
        self.bias_score = 8.8

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class_ = 'views-field views-field-title')
            # grab the links
            link_tags = [tag.find('span').find('a').get('href') for tag in all_headlines]
            # remove all non cnn links, al outside links start with http://
            link_tags = [tag for tag in link_tags if 'https://' not in tag]
            links = [str(self.query_breaking + link[1:]) for link in link_tags]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('h3', class_ = 'title')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        # clean out videos
        links = [link for link in links if '/video/' not in link]
        return links