from newssite import Site

class WashPost(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.washingtonpost.com/newssearch/?query={}'
        self.query_breaking = 'https://www.washingtonpost.com/'

    def query_str(self, keyword=None):
        # no keyword, use breaking news
        if keyword is None:
            return self.query_breaking
        else:
            return self.query_keyword.format(keyword.strip().replace(' ', '%20'))

    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = [headline for headline in parser.find_all('div') if headline.get('data-feature-id') == 'homepage/story-ans']
            links = [tag.find('a').get('href') for tag in all_headlines if tag.find('a') is not None]
        else:
            # scrape for keyword
            all_headlines = [headline for headline in parser.find_all('a') if headline.get('data-pb-field') == 'headlines.basic']
            # grab the links
            links = [tag.get('href') for tag in all_headlines]
        return links