exports.handler = async function (event: any) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        service_id: "service_h1n8tls",
        template_id: "template_b4bp7zo",
        user_id: "_fYueIt8fNrMvRc3C",
      }),
    };
  } catch (error: any) {
    return { statusCode: 500, body: error.toString() };
  }
};
