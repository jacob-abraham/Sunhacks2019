
from washpost import WashPost
from application import application

if __name__ == '__main__':
    src = WashPost()
    links = src.get_links('republican')
    print(*links, sep='\n')
    print(len(links))
