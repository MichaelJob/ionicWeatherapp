import { NgModule } from '@angular/core';
import { RoundPipe, RoundTenthPipe } from './round/round';
@NgModule({
	declarations: [RoundPipe, RoundTenthPipe],
	imports: [],
	exports: [RoundPipe, RoundTenthPipe]
})
export class PipesModule {}
