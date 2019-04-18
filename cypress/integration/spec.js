describe('page', () => {
    it('works', () => {
    });

    it('location.replace', () => {
        window.location.replace("");
    })

    it('location.replace promise', () => {
      setTimeout(() =>{
          window.location.replace("");
      });
    })
})
