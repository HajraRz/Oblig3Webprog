CREATE TABLE Billetter
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    valg VARCHAR(255) NOT NULL,
    antall INTEGER NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    telefonnr VARCHAR(255) NOT NULL,
    epost VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);