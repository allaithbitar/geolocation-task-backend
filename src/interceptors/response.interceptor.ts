import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const ctx = _context.switchToHttp();
    const response = ctx.getResponse();

    return next
      .handle()
      .pipe(
        map((data) => ({ success: true, data, code: response.statusCode })),
      );
  }
}
