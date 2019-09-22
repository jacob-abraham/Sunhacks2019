from newssite import Site

class BiReport(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://bipartisanreport.com/?s={}'
        self.query_breaking = 'https://bipartisanreport.com/'
        self.bias_score = -7.8

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('h3', class_ = 'entry-title td-module-title')
            for tag in all_headlines:
                # grab the links
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').text).strip()
                links.append((link, title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('h3', class_ = 'entry-title td-module-title')
            for tag in all_headlines:
                # grab the links
                link = str(tag.find('a').get('href'))
                title = str(tag.fin('a').text).strip()
                links.append((link, title))
        return links