function Footer(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 py-14 px-32 bg-gray-100 text-gray-600">

            <div className="space-y-4 text-xs text-gray-900">
                <p className="font-bold">About</p>
                <p>How airbnb works</p>
                <p>News room</p>
                <p>Investors</p>
                <p>airbbnb plus</p>
                <p>airbbnb luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-900">
                <p className="font-bold">Hosting</p>
                <p>Try hosting</p>
                <p>AirCover: protection for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>

            <div className="space-y-4 text-xs text-gray-900">
                <p className="font-bold">Community</p>
                <p>Airbnb.org: disaster relief housing</p>
                <p>Support Afghan refugees</p>
                <p>Combating discrimination</p>
                
            </div>

            <div className="space-y-4 text-xs text-gray-900">
                <p className="font-bold">Support</p>
                <p>Help Center</p>
                <p>Safety information</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Supporting people with disabilities</p>
            </div>
            
        </div>
    )
}

export default Footer