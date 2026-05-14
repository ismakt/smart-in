import streamlit as st

# =========================
# SESSION STATE
# =========================
if "internal_access" not in st.session_state:
    st.session_state.internal_access = False


# =========================
# INTERNAL ACCESS UI
# =========================
st.title("Smart In – Internal Dashboard")

key = st.text_input("Internal access", type="password")

if st.button("Unlock"):
    if key == st.secrets["INTERNAL_KEY"]:
        st.session_state.internal_access = True
        st.success("Access granted")
    else:
        st.error("Invalid key")


# =========================
# INTERNAL CONTENT
# =========================
def render_internal_content():
    st.subheader("Advanced map")
    # TON CODE EXISTANT

    st.subheader("Statistics")
    # TON CODE EXISTANT

    st.subheader("Export")
    # TON CODE EXISTANT


# =========================
# DISPLAY CONTROL
# =========================
if st.session_state.internal_access:
    render_internal_content()
else:
    st.info("Internal access required")
