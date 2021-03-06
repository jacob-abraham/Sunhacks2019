from newssite import Site

class HuffPost(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://search.huffpost.com/search?p={}'
        self.query_breaking = 'https://www.huffpost.com/news/'
        self.bias_score = -3.8

    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        # no keyword, scarp for breaking
        if keyword is None:
            all_headlines = parser.find_all('div', class_ = 'card__headline')
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                title = str(tag.find('div', class_ = 'card__headline__text').text).strip()
                links.append((link,title))
        else:
            all_headlines = parser.find_all('li', class_ = 'ov-a mt-0 pt-26 pb-26 bt-dbdbdb')
            for tag in all_headlines:
                link = str(tag.find('a').get('href')[2:0])
                title = str(tag.find('a').get('title')).strip()
                links.append((link,title))
        #print(*links, sep='\n')
        return links
