describe('bind', function () {
  var alice = {
    name: 'Al'
  };

  describe('fundamentals', function () {

    var greet = function () {
      return 'hi';
    };

    it('returns a function', function () {
      var boundGreet = bind(greet, alice);
      expect(boundGreet).to.be.a('function');
    });

    it('does not return the input function', function () {
      var boundGreet = bind(greet, alice);
      expect(boundGreet).not.to.equal(greet);
    });

    /* Warning: Advanced testing syntax
     *
     * This test is disabled because it relies on function spying, which is a powerful but complex
     * testing tool. If you're ready to tackle this syntax, your code will benefit from more
     * thorough testing.
     *
     * Uncomment the following test block if you would like to enable the test.
     */


    /*
    it('returns a function that proxies the original function', function () {

      // setup
      var original = greet;
      greet = sinon.spy(greet);

      // test
      var boundGreet = bind(greet, alice);
      expect(greet.callCount).to.equal(0);
      var sentence = boundGreet();
      expect(greet.callCount).to.equal(1);

      // cleanup
      greet = original;

    });
    */


  });

  describe('operating on a simple function', function () {

    var personalGreet = function () {
      return 'this is ' + this.name;
    };

    it('runs the target function in the context of the target object, when invoked as a free function', function () {
      var boundPersonalGreet = bind(personalGreet, alice);
      var sentence = boundPersonalGreet();
      expect(sentence).to.equal('this is Al');
    });

    it('runs the target function in the context of the target object, even when invoked as a method of some other object', function () {
      var bob = {
        name: 'Bobby'
      };
      bob.boundPersonalGreet = bind(personalGreet, alice);
      var sentence = bob.boundPersonalGreet();
      expect(sentence).to.equal('this is Al');
    });

  });

  describe('operating on a function that takes an argument', function () {

    var friendlyGreet = function (salutation) {
      return salutation + ', ' + 'this is ' + this.name;
    };

    var boundFriendlyGreet = bind(friendlyGreet, alice);

    it('passes explicit arguments along from the proxy function to the target function', function () {
      var sentence = boundFriendlyGreet('howdy');
      expect(sentence).to.equal('howdy, this is Al');
    });

  });

  describe('operating on a function that takes dynamic arguments', function () {

    var lawyerGreet = function (firstPartner, secondPartner /*, [...nthParner]*/ ) {
      var names = Array.prototype.slice.call(arguments);
      names[names.length - 1] = '& ' + names[names.length - 1];
      return names.join(', ') + ', this is ' + this.name;
    };

    var boundLawyerGreet = bind(lawyerGreet, alice);

    /* Warning: Advanced testing syntax
     *
     * Uncomment the following test block if you would like to enable the test.
     */

    /*
    it('calls the target function with the same number of arguments as were passed to the proxy function', function(){

      // setup
      var original = boundLawyerGreet;
      boundLawyerGreet = sinon.spy(boundLawyerGreet);

      // test
      var sentence = boundLawyerGreet('Shelton', 'Maxwell', 'Eddies', 'Park');
      expect(sentence).to.equal('Shelton, Maxwell, Eddies, & Park, this is Al');
      expect(boundLawyerGreet.lastCall.args.length).to.equal(4);

      // cleanup
      boundLawyerGreet = original;
    });

    it('passes an arbitrarily large number of arguments along from the proxy function to the target function', function(){

      // setup
      var original = boundLawyerGreet;
      boundLawyerGreet = sinon.spy(boundLawyerGreet);

      // test
      var names = ['Winston', 'Miller'];
      while(0.05 < Math.random()){
        var randomName = 'Nowell Hendrix Larson Gaffney Laub Reynolds Green Parker Wilmer Snell'.split(' ')[Math.floor(Math.random() * 10)];
        names.push(randomName);
      }
      var sentence = boundLawyerGreet.apply({}, names);
      expect(boundLawyerGreet.lastCall.args).to.eql(names);

      // cleanup
      boundLawyerGreet = original;
    });
    */

  });

  describe('available as a method of any function', function () {

    var personalGreet = function () {
      return 'this is ' + this.name;
    };
    var boundPersonalGreet = personalGreet.bind(alice);

    it('returns a function', function () {
      expect(boundPersonalGreet).to.be.a('function');
    });

    it('does not return the input function', function () {
      expect(boundPersonalGreet).not.to.equal(personalGreet);
    });

    /* Warning: Advanced testing syntax
     *
     * This test is disabled because it relies on function spying, which is a powerful but complex
     * testing tool. If you're ready to tackle this syntax, your code will benefit from more
     * thorough testing.
     *
     * Uncomment the following test block if you would like to enable the test.
     */

    /*
    it('returns a function that proxies the original function', function(){

      // setup
      var original = personalGreet;
      personalGreet = sinon.spy(personalGreet);

      // test
      var boundPersonalGreet = bind(personalGreet, alice);
      expect(personalGreet.callCount).to.equal(0);
      var sentence = boundPersonalGreet();
      expect(personalGreet.callCount).to.equal(1);

      // cleanup
      personalGreet = original;
    });
    */

    it('runs the target function in the context of the target object, when invoked as a free function', function () {
      var sentence = boundPersonalGreet();
      expect(sentence).to.equal('this is Al');
    });

    it('runs the target function in the context of the target object, even when invoked as a method of some other object', function () {

      var bob = {
        name: 'Bobby'
      };

      bob.boundPersonalGreet = boundPersonalGreet;
      var sentence = bob.boundPersonalGreet();
      expect(sentence).to.equal('this is Al');
    });

  });
});
