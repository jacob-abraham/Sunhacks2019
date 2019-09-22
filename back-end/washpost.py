from newssite import Site

class WashPost(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.washingtonpost.com/newssearch/?query={}'
        self.query_breaking = 'https://www.washingtonpost.com/'
        self.bias_score = 1.2

    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = [headline for headline in parser.find_all('div') if headline.get('data-feature-id') == 'homepage/story-ans']
            for tag in all_headlines:
                if tag.find('a') is not None:
                    link = tag.find('a').get('href')
                    title = tag.find('a').text).strip()
                    link.append((link,title))
        else:
            # scrape for keyword
            all_headlines = [headline for headline in parser.find_all('a') if headline.get('data-pb-field') == 'headlines.basic']
            for tag in all_headlines:
                # grab the links
                link = tag.get('href')
                title = str(tag.text).strip()
                links.append((link,title))
        return links