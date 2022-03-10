
      $(document).ready(function() {
        $("#blanks form").submit(function(event) {
            alert('Got to beginning of form submit!');
          var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

          blanks.forEach(function(blank) {
            var userInput = $("input." + blank).val();
            console.log(userInput);
            $("." + blank).text(userInput).val();
          });

          $("#story").show();
          alert('Got to end of form submit!');
          event.preventDefault();

        
        });
      });