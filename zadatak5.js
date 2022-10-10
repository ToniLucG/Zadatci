var text = 'dobar dan dame i gospodo';

function camelcase(str) {
    return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  
console.log(camelcase(text));