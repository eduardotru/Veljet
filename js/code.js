/*var ytplayer = document.getElementById("video");
var time = ytplayer.getCurrentTime();*/

var Comment = function(user, texto, rank, moment) {
	this.user = user;
	this.texto = texto;
	this.rank = rank;
	this.moment = moment;
};


var comentarios = [
	new Comment("Rene", "Esta culero", 10, 0.5),
	new Comment("Eduardo", "LOL", 5, 3),
	new Comment("Uriel", "Hola", 3, 2),
	new Comment("Lizzie", "Wow fue lo mejor", 16, 4),
	new Comment("Cupo", "Esta horrible, bye!! buu!!", 20, 5),
	new Comment("Alan", "Fierro Pariente!!!", 30, 3.5)
];

comentarios.sort(function(a, b){
    return a.moment - b.moment;
});

var myApp = angular.module('Aplicacion',['ngRoute','ngAnimate']);

//ROUTES
myApp.config(function($routeProvider){
    $routeProvider
    .when('/following',{
        templateUrl: 'templates/following.html',
        controller: 'videosController'
    })
    .when('/relation',{
        templateUrl: 'templates/relation.html',
        controller: 'videosController'
    })
    .when('/current',{
        templateUrl: 'templates/current.html',
        controller: 'videosController'
    })
});

var contador = 0;
var contador2 = 0;

//myApp.controller('comentarioPopular', ['$scope','$interval', function($scope,$interval,properties) {
    setInterval(function(){
        if(contador < 6){
            var objeto = funciona(1,4);
            $("#popular").html(objeto.user + ": " + objeto.texto);
            contador++; 
        }
    }, 5000);
    
    setInterval(function(){
        if(contador < 6){
            $("#nuevo").html(comentarios[6-contador].user + ": " + comentarios[6-contador].texto);
            contador2++; 
        }
    }, 3000);
//}]);

function funciona(start, finish){
    var mayorank = 0;
    var objeto;
    for(var i = 0; i < 6; i++){
        var comentario = comentarios[i].moment;
        if(comentario >= start && comentario <= finish){
            if(mayorank < comentarios[i].rank){
                mayorank = comentarios[i].rank;
                objeto = comentarios[i];
            }
        }
    }
    return objeto;
}

myApp.controller('videosController', ['$scope', function($scope) {
    
}]);
fakewaffle.responsiveTabs(['xs', 'sm']);
