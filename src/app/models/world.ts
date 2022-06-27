import { Cell } from "./cell";

export class World {
    width: number;
    heigth: number;

    board: Cell[][]=[new Array<Cell>()];
    /**
     * 
     * @param width the width of the board/world
     * @param height the height of the board/world
     */
    constructor(width: number, height: number) {
        this.heigth = height;
        this.width = width;
        for (let width = 0; width < this.width; width++) {
            this.board[width]=new Array<Cell>();
            for (let height = 0; height < this.heigth; height++)
                this.board[width].push(new Cell());
        }
    }
}