
from cnn import CNN
from application import application

def main():
    cnn = CNN()
    print(cnn.get_links("democrat"))

if __name__ == '__main__':
    cnn = CNN()
    print(cnn.get_links())
