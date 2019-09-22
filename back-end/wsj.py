from newssite import Site

class WSJ(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.wsj.com/search/term.html?KEYWORDS={}'
        self.query_breaking = 'https://www.wsj.com/news/us/'
        self.url = 'https://www.wsj.com/'

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class_ = 'WSJTheme--headline--3qd-ycaT')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('h3', class_ = 'headline')
            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [str(self.url + link[1:]) for link in link_tags]
        # clean out videos
        links = [link for link in links if '/video/' not in link]
        return links