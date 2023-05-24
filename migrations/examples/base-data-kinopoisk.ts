import { MigrationInterface, QueryRunner } from "typeorm"

export class BaseDataKinopoisk implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "Genres" (name, is_eng) VALUES
            ('Комедия', false), ('Comady', true),
            ('Мелодрама', false), ('Melodrama', true),
            ('Приключения', false), ('Adventures', true),
            ('Вестерн', false), ('Western', true),
            ('Боевик', false), ('Action Movie', true),
            ('Хоррор', false), ('Horror', true),
            ('Триллер', false), ('Thriller', true),
            ('Детектив', false), ('Detective', true),
            ('Драма', false), ('Drama', true),
            ('Фантастика', false), ('Fantastic', true),
            ('Фэнтези', false), ('Fantasy', true),
            ('Мюзикл', false), ('Musical', true);    
        `);
        await queryRunner.query(`
            INSERT INTO "Roles" (name, is_eng) VALUES
            ('Режиссер', false), ('Stage director', true),
            ('Сценарист', false), ('Screenwriter', true),
            ('Продюсер', false), ('Producer', true),
            ('Оператор', false), ('Operator', true),
            ('Композитор', false), ('Compouser', true),
            ('Художник', false), ('Painter', true),
            ('Монтажер', false), ('Editor', true),
            ('В главных ролях', false), ('Starring', true),
            ('Роли дублировали', false), ('Roles were duplicated', true);
        `);
        await queryRunner.query(`
            INSERT INTO "Countries" (name, is_eng) VALUES
            ('Франция', false), ('France', true),
            ('Испания', false), ('Spanish', true),
            ('США', false), ('USA', true),
            ('Китай', false), ('China', true),
            ('Италия', false), ('Italy', true),
            ('Мексика', false), ('Mexico', true),
            ('Великобритания', false), ('United Kingdom', true),
            ('Турция', false), ('Turkish', true),
            ('Германия', false), ('Germany', true),
            ('Тайланд', false), ('Thailand', true),
            ('Австрия', false), ('Austria', true),
            ('Гонконг', false), ('Hongkong', true),
            ('Малайзия', false), ('Malaysia', true),
            ('Греция', false), ('Greece', true),
            ('Россия', false), ('Russia', true),
            ('Япония', false), ('Japan', true),
            ('Португалия', false), ('Portugal', true),
            ('Канада', false), ('Canada', true),
            ('Польша', false), ('Poland', true),
            ('Нидерланды', false), ('Netherlands', true);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
