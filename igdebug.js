function start() {
        var lines = $('#input').val().split(/\n/);
        var accessToken = $('#accessToken').val();
        var option = $("#option").val();
        var output = [];
        var outputText = [];
        for (var i = 0; i < lines.length; i++) {
          if (/\S/.test(lines[i])) {

            var params = {
              "long_url" : $.trim(lines[i])
          };

          $.ajax({
              url: "https://api-ssl.bitly.com/v4/shorten",
              cache: false,
              dataType: "json",
              method: "POST",
              contentType: "application/json",
              beforeSend: function (xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
              },
              data: JSON.stringify(params)
          }).done(function(data) {
                  if(option == 1) {
              var rest = data.link;
              var uh = rest.replace('bit.ly', 'j.mp');
            }
            else{
            var uh = data.link;
            }

              $("#result").append("https://l.instagram.com/?u=" + uh + "&e=" + "ATOb8Ad8gB711-4BVpYKQgAxUg4CrQlKAa2qpaHOD3aKYZtESsPdqibs_WY0b7XO_Mwy2mXqkmnRrnrQChxoAUA"+ "\n"), $(".alert").removeClass("alert-info alert-warning").addClass("alert-success").text("Done!"), btn.button("reset")
          }).fail(function(data) {
              $("#result").append(data.link + "\n"), $(".alert").removeClass("alert-info alert-warning").addClass("alert-success").text("Done!"), btn.button("reset")
          });

          }
        };
      }

          $(document).ready(function() {
          $("#btn").click(function() {
              btn = $(this), btn.button("loading"), start(0), $(".alert").addClass("alert-warning").removeClass("alert-success").text("waiting...!");

          })
      });

      function copy() {
        let textarea = document.getElementById("result");
        textarea.select();
        document.execCommand("copy");
      }
