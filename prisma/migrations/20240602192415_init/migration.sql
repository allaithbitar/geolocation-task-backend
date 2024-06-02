-- CreateTable
CREATE TABLE `Result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `query` VARCHAR(191) NOT NULL,
    `long` DECIMAL(65, 30) NOT NULL,
    `lat` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `Result_query_key`(`query`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
