
function SignUpForm() {
	return (
		<main>
			<h1>Sign Up</h1>
			<form>
				<div className="row">
					<div>
						<label htmlFor="favoriteBook">Favorite Book</label>
						<input
                            defaultValue={'None listed'}
							className="form-control"
							id="favoriteBook"
							name="favoriteBook"
						/>
					</div>
					<div>
						<label htmlFor="favoriteGenre">Favorite Genre</label>
						<input
                            defaultValue={'None listed'}
							className="form-control"
							id="favoriteGenre"
							name="favoriteGenre"
						/>
					</div>
				</div>
				<div className="row">
					<div>
						<label htmlFor="username">Username</label>
						<input
							required
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm