(function() {
  describe('Math:', function() {
    describe('fib()', function() {
      return it('should calculate the numbers correctly up to fib(16)', function() {
        var fib, i, _results;
        fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
        _results = [];
        for (i = 0; i <= 16; i++) {
          _results.push(expect(Math.fib(i)).toEqual(fib[i]));
        }
        return _results;
      });
    });
    return describe('uuid()', function() {
      it('should have the proper UUID format', function() {
        return expect(Math.uuid()).toMatch(/[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{13}/);
      });
      it('should have always the numer 4 at position 14', function() {
        expect(Math.uuid()).toMatch(/[A-Z0-9]{8}-[A-Z0-9]{4}-4[A-Z0-9]{3}-[A-Z0-9]{4}-[A-Z0-9]{13}/);
        expect(Math.uuid()).toMatch(/[A-Z0-9]{8}-[A-Z0-9]{4}-4[A-Z0-9]{3}-[A-Z0-9]{4}-[A-Z0-9]{13}/);
        return expect(Math.uuid()).toMatch(/[A-Z0-9]{8}-[A-Z0-9]{4}-4[A-Z0-9]{3}-[A-Z0-9]{4}-[A-Z0-9]{13}/);
      });
      return it('should generate a unique uuid for 1000 generated uuids at least', function() {
        var counter, uuids;
        uuids = [];
        counter = 0;
        while (counter < 1000) {
          uuids.push(Math.uuid());
          counter++;
        }
        return expect(uuids.length).toEqual(_.uniq(uuids).length);
      });
    });
  });
}).call(this);
