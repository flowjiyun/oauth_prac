import { Controller, Get, Res } from '@nestjs/common';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private oauthService: OauthService) {}

  @Get()
  getHello(@Res() response): object {
    return response.json(this.oauthService.getHello());
  }
}
