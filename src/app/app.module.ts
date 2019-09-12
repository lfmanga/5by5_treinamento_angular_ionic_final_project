import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPage } from './pages/main/main.page';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
	declarations: [
		AppComponent,
		MainPage
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(),
		AppRoutingModule
	],
	providers: [
		AuthGuard,
		{
			provide: RouteReuseStrategy,
			useClass: IonicRouteStrategy
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

/*
projeto final treinamento angular

contato
	id
	nome
	email
	cpf
	telefone
	endereço
	imagem (lorem picsum)


angular
	model
	service
	directive
	pipe
	pages
	components
	ionic
	validators
	guards


funcionalidades
	login
	logout
	signup
	reset password
	crud
	pwa
*/
