import { Injectable } from '@nestjs/common';

@Injectable()
export class ImagesAppService {

detectai(filename: string){

    if(filename ){
        return {
            status: 200 ,
            data: filename,
            message: "AI generation not detected at Images service"
          };
    }

return {
    status: 500,
    verified: false,
    message: "AI generation detected for this Image"
}

}


}
