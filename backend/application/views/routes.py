from application.models.models import *
from flask import jsonify, render_template, request
from application import db,app
from flask import redirect, url_for
from application.utils import save_file

@app.route('/add_location', methods=['GET','POST'])
def add_location():
    if request.method == 'POST':
        name = request.form.get('name')
        distance = request.form.get('distance')
        image = request.files['image-name']
        isSaved, file_name = save_file(image,'../../../public')
        if isSaved:
            new_location = Locations(name=name,distance=distance, image=file_name)
            try:
                db.session.add(new_location)
                db.session.commit()
                return redirect('/add_location')
            except:
                return "There was an issue"
    else:
        return render_template('index.html')


@app.route('/get_locations', methods=['GET'])
def get_locations():
    all_locations = Locations.query.all()
    results = locations_schema.dump(all_locations)
    return jsonify(results)



				
