export class ImageSubmittedEvent {
    constructor(
        public readonly file: Express.Multer.File,
        public readonly filename: string
    ) {}
}