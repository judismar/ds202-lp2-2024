--
-- File generated with SQLiteStudio v3.4.8 on ter fev 18 08:35:10 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: despesa
CREATE TABLE IF NOT EXISTS despesa (id INTEGER PRIMARY KEY, mes TEXT);
INSERT INTO despesa (id, mes) VALUES (1, 'Janeiro');
INSERT INTO despesa (id, mes) VALUES (2, 'Fevereiro');
INSERT INTO despesa (id, mes) VALUES (3, 'dezembro');

-- Table: gasto
CREATE TABLE IF NOT EXISTS gasto (id_gasto INTEGER PRIMARY KEY, nomeg TEXT NOT NULL, valorg NUMERIC NOT NULL, id_despesa INTEGER REFERENCES despesa (id));
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (1, 'compras', 132.98, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (2, 'compras', 52.34, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (3, 'compras', 243.55, 2);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (4, 'compras', 49.05, 3);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (5, 'compras', 97.1, 3);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (7, 'bichos', 146, 2);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (8, 'petiscos p/ bichos', 12.3, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (9, 'petiscos p/ bichos', 23, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (10, 'petiscos p/ bichos', 35.7, 2);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (11, 'petiscos p/ bichos', 10.3, 3);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (12, 'petiscos p/ bichos', 50, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (13, 'lanche', 3.5, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (14, 'lanche', 25, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (15, 'lanche', 1.5, 1);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (16, 'lanche', 5.1, 2);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (17, 'lanche', 21.35, 2);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (18, 'lanche', 1, 3);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (19, 'lanche', 5, 3);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (20, 'corte de cabelo', 30, 2);
INSERT INTO gasto (id_gasto, nomeg, valorg, id_despesa) VALUES (22, 'Dívida com João', 20, 2);

-- Table: GastoFixo
CREATE TABLE IF NOT EXISTS GastoFixo (id INTEGER PRIMARY KEY UNIQUE NOT NULL, nomegf TEXT NOT NULL, valorgf REAL NOT NULL);
INSERT INTO GastoFixo (id, nomegf, valorgf) VALUES (1, 'internet', 89.99);
INSERT INTO GastoFixo (id, nomegf, valorgf) VALUES (2, 'condomínio', 200.0);
INSERT INTO GastoFixo (id, nomegf, valorgf) VALUES (3, 'netflix', 19.99);

-- Table: tem
CREATE TABLE IF NOT EXISTS tem (id_despesa INTEGER REFERENCES despesa (id), id_gastofixo INTEGER REFERENCES GastoFixo (id), PRIMARY KEY (id_despesa, id_gastofixo)) WITHOUT ROWID;
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (1, 1);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (1, 2);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (2, 1);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (2, 2);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (2, 3);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (3, 1);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (3, 2);
INSERT INTO tem (id_despesa, id_gastofixo) VALUES (3, 3);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
