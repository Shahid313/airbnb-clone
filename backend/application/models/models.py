from application import app, db, ma

class Locations(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(250), nullable=False)
	distance = db.Column(db.String(250), nullable=False)
	image = db.Column(db.Text,nullable=False)

	def __init__(self,name,distance,image):
		self.name = name
		self.distance = distance
		self.image = image
        

class LocationSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'distance', 'image')

location_schema = LocationSchema()
locations_schema = LocationSchema(many=True)