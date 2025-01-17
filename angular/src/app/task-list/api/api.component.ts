import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, getDocs, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Game } from '../games';
import {SharedDataService} from '../shard-data.service';
import { ErorrPopService } from '../erorr-pop.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})





export class ApiComponent {
 
  firestore: Firestore = inject(Firestore);
  games: Game[] = [];
  editMode = false;
  loggedIn: boolean = false;  


  constructor(private SharedDataService: SharedDataService, private ErorrPopService: ErorrPopService) {
    //this.loggedIn=this.SharedDataService.getLoggedIn();
    setTimeout(() => {
      this.readGames();
    }, 1000);
    }



    checkUpdate() {
    this.loggedIn=this.SharedDataService.getLoggedIn();
    }

     editGame(game: any) {
      game.editing = true;
    }

    createGames(gameName: string, gameComments: string, gamePlayedYear: string, gameRating: string) {
      this.checkValidity(gameName, gameComments, parseInt(gamePlayedYear), parseInt(gameRating));
      setDoc(doc(this.firestore, 'gamesList', gameName), {
        comments: gameComments,
        playedYear: gamePlayedYear,
        rating: gameRating
      });
      this.readGames();
      //console.log(this.games);
    }

    checkValidity(gameName: string, gameComments: string, gamePlayedYear: number, gameRating: number) {
      if (gameName == '' || gameComments == '' || gamePlayedYear == null || gameRating == null) {
        this.ErorrPopService.createErrorPopup('Negali būti tuščių langų');
        return true;
      }
      console.log ("trecias", this.games.find(game => game.name === gameName));
      if (this.games.find(game => game.name === gameName)) {
        console.log("game exists");
        this.ErorrPopService.createErrorPopup('Žaidimas jau egzistuoja');   
        return true;
      }
      else {
        return true;
      }
    }

    updateGames(game: Game) {
      //this.checkValidity(game.name, game.comments, game.playedYear, game.rating);
      game.editing = false;
      console.log(game.name);
      setDoc(doc(this.firestore, 'gamesList', game.name), {
        comments: game.comments,
        playedYear: game.playedYear,
        rating: game.rating
      });
      setTimeout(() => {
        this.readGames();
      }, 300);
    }
    editGames() {
      this.editMode = true;
    }


    readGames() {
      this.loggedIn=this.SharedDataService.getLoggedIn();
      if (this.loggedIn==true){
        const gamesCollection = collection(this.firestore, 'gamesList');
      this.games = [];
      getDocs(gamesCollection).then(querySnapshot => {
        querySnapshot.forEach(doc => {
            this.games.push({
            name: doc.id,
            comments: doc.data()['comments'],
            playedYear: doc.data()['playedYear'],
            rating: doc.data()['rating']
            } as Game);
        });
      }).catch(error => {
        this.ErorrPopService.createErrorPopup('Error fetching games');
        console.error('Error fetching games:', error);
      });
      console.log("whatttt");
      this.checkUpdate();
      }
      else{ 
        console.log(this.loggedIn);
        return;
  
    }
  }
    deleteGames(gameName: string) {
      deleteDoc(doc(this.firestore, 'gamesList', gameName)).then(() => {
        console.log(`Document with gameName ${gameName} successfully deleted!`);
      }).catch(error => {
        console.error('Error deleting document:', error);
      });
      setTimeout(() => {
        this.readGames();
      }, 300);
    }
  
}
