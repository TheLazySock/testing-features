<template>
    <div class="github-user">
        <h1>GITHUB USER</h1>
        <div class="left-block">
            <img :src="user.avatar_url" class="avatar"/>
            <div>
                <h1 class="user-info-block">
                    <span class="full-name">{{ user.name }}</span>
                    <span class="username">{{ user.login }}</span>
                </h1>
            </div>
        </div>
        <div class="right-block" v-if="user.bio || user.followers || user.following">
            <span>Bio: {{ user.bio }}</span>
            <span>Followers count: {{ user.followers }}</span>
            <span>Following count: {{ user.following }}</span>
            <span>Location: {{ user.location }}</span>
        </div>
    </div>
</template>

<script>
//Мне влом делать фетчи ещё и на организации, репозитории, фолловеров и прочее, поэтому 
//информации рендерится по минимуму.
//Всё равно смысл был в проверке именно работы экшнов, так что пойдёт. 
export default {
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    }
}
</script>

<style scoped>
.github-user {
    width: 90% !important;
    align-self: center;
}

.avatar {
    width: 100%;
    border-radius: 10px;
}

.left-block {
    width: 360px;
    float: left;
    padding-right: 16px;
}

.user-info-block {
    font-weight: 600;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    
}

.user-info-block .full-name {
    font-size: 38px;
    line-height: 30px;
    margin-bottom: 5px;
}

.user-info-block .username {
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #666666;
}

.right-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 45px;
}
</style>

