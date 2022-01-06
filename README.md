# Zadanie 1

## Aplikacja bazuje na przykładzie z lab. 9.

## Zmodyfikowano:
### server:
* **index.js** - zmieniono limit dla indeksu k do 20

### client:
* **App.js** - wykorzystano router React
* **Fib.js** - zmieniono sposób wyświetlania historii
* #### **Utworzono komponenty:**
    * **Home.js** - komponent strony głównej
    * **Documentation.js** - komponent dokumentacji

### worker:
* **index.js** - zmodyfikowano funkcję wyliczającą k-ty element ciągu Fibonacciego


## Uruchomienie
W katalogu głównym uruchomić:

`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.dev.yml up --build`

Aplikacja działa na porcie 80

## Zrzut ekranu
![zrzut ekranu](misc/app.png "Zrzut ekranu")
