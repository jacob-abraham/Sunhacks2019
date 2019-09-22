from newssite import Site

class NYT(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.nytimes.com/search?query={}'
        self.query_breaking = 'https://www.nytimes.com/'
        self.bias_score = -1.2

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class_ = 'css-qvz0vj')
            for tag in all_headlines:
                # grab the links
                link = str(tag.find('a').get('href').text).strip()
                # grab the title
                title = str(tag.find('a').find('span', class_ = 'ghost').text).strip()
                links.append((link, title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'css-138we14')
            # grab the links
            for tag in all_headlines:
                link = tag.find('a').get('href')
                link = str((self.query_breaking + link[1:])).strip()
                title = str(tag.find('a').find('h4').text).strip()
                links.append((link,title))
        return links