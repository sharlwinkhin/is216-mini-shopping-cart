<template>
    <h1>About us</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos minus necessitatibus tenetur ab id odio nihil
        repudiandae harum, qui aliquid! Deserunt libero minus perferendis possimus corporis modi dolor inventore
        distinctio.
    </p>

    <div class="container-fluid">
        <div class="row row-cols-auto justify-content-end">
            <RouterLink to="/menu">
                <!-- Ref: https://icons.getbootstrap.com/icons/arrow-right/ -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg> Menu
            </RouterLink>
        </div>
    </div>

</template>

<style scoped></style>
