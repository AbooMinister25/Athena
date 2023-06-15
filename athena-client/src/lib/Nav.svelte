<nav>
	<a class="nav-link" href="/">
		<img src="/icons/favicon.ico" />
	</a>
	<a class="nav-link" href="/src/routes/signup/+page.svelte">Get Started</a>
	<a class="nav-link" href="/">About Us</a>
	<div class="dropdown nav-link-right">
		<button class="dropdown-btn">More</button>
		<div class="dropdown-content">
			<a class="dropdown-item" href="#">Single Digit</a>
			<a class="dropdown-item" href="#">Double Digit</a>
			<a class="dropdown-item" href="#">Triple Digit</a>
		</div>
	</div>
</nav>

<style lang="scss">
	@import 'node_modules/nord/src/sass/nord.scss';

	nav {
		display: flex;
		width: 100%;
		margin: auto;
		border-bottom: 2px solid $nord8;

		@media (min-width: 801px) {
			width: 75%;
			margin: auto;
		}
	}

	.nav-link {
		margin: auto;
		text-decoration: none;
		color: $nord0;

		&:hover {
			text-decoration: underline 2px $nord8;
		}

		@media (min-width: 448px) {
			margin: auto 1rem;
		}
	}

	.nav-link-right {
		margin: auto 1rem auto auto;

		text-decoration: none;
		color: $nord0;

		&:hover {
			text-decoration: underline 2px $nord8;
		}
	}

	.dropdown {
		&:hover {
			.dropdown-content {
				display: flex;
				flex-direction: column;
				position: absolute;
				z-index: 1;
				background-color: $nord4;
				padding: 1rem;
			}
		}
	}

	.dropdown-btn {
		border: none;
		font: inherit;
		cursor: pointer;
		background-color: inherit;

		&:hover {
			background-color: inherit;
		}
	}

	.dropdown-content {
		display: none;
	}

	.dropdown-item {
		color: inherit;
		text-decoration: none;
		padding: 0.5rem;

		&:hover {
			background-color: $nord5;
		}
	}
</style>
