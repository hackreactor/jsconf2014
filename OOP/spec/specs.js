window.variant = document.location.search.slice(1);

define([
  '../lib/chai/chai.js',
  '../lib/mocha/mocha.js',
  'src/'+variant+'/stack.js',
  '../lib/jquery/jquery.js'
], function(chai){

  $(function(){
    $('<h4>The '+variant+' pattern</h4>').css({margin: 0}).prependTo(document.body);
  });

  mocha.setup('bdd');
  var expect = chai.expect;

  describe("stack", function() {

    var stack;
    var instantiator = variant === 'pseudoclassical' ? Stack : makeStack;
    var prototypeOfInstances = variant === 'prototypal' && stackMethods;

    beforeEach(function(){
      if(variant === 'pseudoclassical'){
        stack = new instantiator();
      } else {
        stack = instantiator();
      }
    });

    it('reports a size of zero for a new stack', function() {
      expect(stack.size()).to.equal(0);
    });

    it('reports a size of 2 after adding two items', function() {
      stack.push('a');
      stack.push('b');
      expect(stack.size()).to.equal(2);
    });

    it('does not error when removing from an empty stack', function() {
      expect(function(){ stack.pop(); }).not.throws();
    });

    it('reports a size of 1 after adding two items and removing one', function() {
      stack.push('a');
      stack.push('b');
      stack.pop();
      expect(stack.size()).to.equal(1);
    });

    it('reports a size of 0 after removing more items than were added', function() {
      stack.push('a');
      stack.pop();
      stack.pop();
      expect(stack.size()).to.equal(0);
    });

    it('allows sequentially additing and removing items', function() {
      stack.push('a');
      expect(stack.pop()).to.equal('a');
      stack.push('b');
      expect(stack.pop()).to.equal('b');
    });

    it('removes the most recently added of two items', function() {
      stack.push('a');
      stack.push('b');
      expect(stack.pop()).to.equal('b');
    });

    it('removes the newest item, after newer items have already been added and removed', function() {
      stack.push('a');
      stack.push('b');
      stack.push('c');
      stack.pop();
      expect(stack.pop()).to.equal('b');
    });

  });

  mocha.run();
});
