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
            for tag in all_headlines:
                # grab the links
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').get('title')).strip()
                links.append((link,title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'result')
            for tag in all_headlines:
                # grab the links
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').text).strip()
                links.append((link,title))
        return links