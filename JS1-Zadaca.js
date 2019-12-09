var month = prompt("Unesite mjesec:");
var doba;

switch(month){
	case 'prosinac':
  	doba = 'zima';
    break;
  case 'sijecanj':
  	doba = 'zima';
    break;
  case 'veljaca':
  	doba = 'zima';
    break;
  case 'ozujak':
  	doba = 'proljece';
    break;
  case 'travanj':
  	doba = 'proljece';
    break;
  case 'svibanj':
  	doba = 'proljece';
    break;
  case 'lipanj':
  	doba = 'ljeto';
    break;
  case 'srpanj':
  	doba = 'ljeto';
    break;
  case 'kolovoz':
  	doba = 'ljeto';
    break;
  case 'rujan':
  	doba = 'jesen';
    break;
  case 'listopad':
  	doba = 'jesen';
    break;
  case 'studeni':
  	doba = 'jesen';
    break;
  default:
  	doba = "Pogresan unos!";
}

console.log(doba);