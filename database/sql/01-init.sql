CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";

CREATE TABLE "game"
(
  game_id uuid DEFAULT uuid_generate_v4 (),
  name varchar(25) NOT NULL,
  isFinished BOOLEAN NOT NULL DEFAULT false,
  createdAt date NOT NULL DEFAULT CURRENT_DATE
);