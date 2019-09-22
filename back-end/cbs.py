from newssite import Site

class CBS(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.cbsnews.com/search/?q={}'
        self.query_breaking = 'https://www.cbsnews.com/us/'
        self.url = 'https://www.cbsnews.com/'
        self.bias_score = -0.6

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('article')
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').find('h4', class_ = 'item__hed').text).strip()
                links.append((link, title))
        else:
            # scrape for keyword
            all_headlines = [headline for headline in parser.find_all('li') if headline.find('div', class_ = 'media-body') is not None]
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').text).strip()
                links.append((link, title))
        # clean out videos
        links = [link for link in links if '/video/' not in link[0]]
        # remove duplicates
        links = list(dict.fromkeys(links))
        return links