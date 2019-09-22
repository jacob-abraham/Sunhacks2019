from newssite import Site

class CBS(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.cbsnews.com/search/?q={}'
        self.query_breaking = 'https://www.cbsnews.com/us/'
        self.url = 'https://www.cbsnews.com/'

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
            all_headlines = [headline for headline in parser.find_all('li') if headline.find('div', class_ = 'media-body') is not None]
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
            links = [(self.url + link[1:]) for link in link_tags
        return links